import {generateBoard} from "./display.js"
import { ps } from "./pubsub.js"
import { Ship } from "./ship.js"

const Gameboard = (playerBoat = []) => {
    const ComputerBoard = () => {   
        const setLocation = (obj) => {
            let thisBoat = []
            playerBoat.forEach(boat => {
                if(boat.boatName === obj.boat) {
                    boat.coordinates = obj.array
                    thisBoat = Ship(boat.boatName, boat.length).shipLocation(boat.coordinates, playerBoat)
                }
            })
            return thisBoat
        }
        const makeBoard = () => generateBoard('computer-board') 
        
        const receiveAttack = (hitSpot) => {
            let boat = _filterBoat(hitSpot)  
            const name = boat.boatName 
            const length = boat.length 
            if(boat.boatName === undefined) return boat 
            
            //send hit coordinates to isHit
            return Ship(name, length).isHit(hitSpot, playerBoat)
        }

        return {
            setLocation,
            receiveAttack,
            makeBoard
        }
    }
    
    const PlayerBoard = () => {
        const setLocation = (obj) => {
            let num = parseInt(obj.num)
            let thisBoat
            playerBoat.forEach(boat => {
                if(boat.boatName !== obj.boat) {
                    return
                }

                if(obj.isVertical === true) {
                    for(let i = num+10; i<=num+(boat.length*10); i+=10) {
                        ps.publish('push-coordinates', {
                            i,
                            boat,
                        })
                    }
                }
                else {
                    for(let i = num+1; i<=num+boat.length; i++) {
                        ps.publish('push-coordinates', {
                            i,
                            boat
                        })
                    }
                }
                ps.publish('set-player-ships', boat)  
                thisBoat = boat
            })
            return thisBoat
        }
        const makeBoard = () => {
            generateBoard('player-board') 
        }
        const receiveAttack = (hitSpot) => {
            spotsTaken().playerSpotsTaken(hitSpot)
            let boat = _filterBoat(hitSpot) 
            const name = boat.boatName
            const length = boat.length
            if(boat.boatName === undefined) return boat
            //send hit coordinates to isHit
            return Ship(name, length).isHit(hitSpot, playerBoat)
        }
        return {
            setLocation,
            receiveAttack,
            makeBoard
        }
    }

    const spotsTaken = () => {
        const playActiveSpots = []
        const playerSpotsTaken = (spot) => {
            playActiveSpots.push(spot)
        }
        return {
            playerSpotsTaken,
            playActiveSpots
        }
    }

    const _filterBoat = (hitSpot) => {
        let playerMissedShots = []
        let hitBoat
        const boatHit = playerBoat.filter(boat => {
            boat.coordinates.forEach(num => {
                if(num.id === hitSpot) {
                    hitBoat = boat
                }
                else {
                    return
                }
            })
            return hitBoat === boat 
        })

        if(boatHit.length === 1) {
            ps.publish('hit-shot', hitSpot)
        }
        else if(boatHit.length === 0) {
            //record coordinates of missed shot
            playerMissedShots.push(hitSpot) 
            ps.publish('missed-shot', hitSpot)
            return playerMissedShots
            //record missed shot on board
        }

        return boatHit[0]

    }
    return {
        ComputerBoard,
        PlayerBoard,
        spotsTaken
    }
}

const ifBoatIsHit = () => {
    const isHit = (num) => {
        const node = document.querySelector(`#p${num}`)
        if(node.classList.length >= 4) {
            return node.classList[3]
        }
        else {
            return undefined
        }
    }
    return {
        isHit
    }
}

const searchForBoat = () => {
    let isVertical = false
    let add = true
    let num

    let obj = {
        num,
        newNum: 0
    }  

    const _addOne = (num) => num+1 
    const _subtractOne = (num) => num-1 
    const _addTen = (num) => num+10
    const _subtractTen = (num) => num-10 

    const _ifBoom = (num) => {
        const node = document.querySelector(`#p${num}`)

        if(node.classList.contains('boom')) {
            return true
        }
        else {
            return false
        }
    }

    const searchVertical = (num) => {
        let h = ifBoatIsHit()
        if(add === true && obj.newNum === num-1 && num <= 100) {
            obj.newNum = _addTen(num)
            if(obj.newNum > 100) {
                obj.newNum = _subtractTen(num)
                add = false
            }
            return obj
        }
        else if(h.isHit(obj.newNum) !== undefined && add === true) {
            obj.newNum = _addTen(obj.newNum)
            return obj
        }
        else if(h.isHit(obj.newNum) !== undefined && add === true) {
            obj.newNum = _subtractTen(obj.newNum)
            add = false
            return obj
        }
        else if(h.isHit(obj.newNum) === undefined && add === true && num >= 1) {
            obj.newNum = _subtractTen(num)
            add = false
            return obj
        }
        else if(h.isHit(obj.newNum) === undefined && add === true && num < 1) {
            obj.newNum = _addTen(num)
            add = true
            return obj
        }
        else if(h.isHit(obj.newNum) !== undefined && add === false) {
            obj.newNum = _subtractTen(obj.newNum)
            return obj
        }
        else if(h.isHit(obj.newNum) === undefined && add === false) {
            obj.newNum = _subtractTen(obj.newNum)
            return obj
        }
    } 
    const searchHorizontal = (num) => {
        let h = ifBoatIsHit()
        if(obj.newNum === 0) {
            obj.newNum = num
            return obj
        }
        else if(h.isHit(obj.newNum) !== undefined && add === true) {
            obj.newNum = _addOne(obj.newNum)
            return obj
        }
        else if(h.isHit(obj.newNum) === undefined && add === true) {
            obj.newNum = _subtractOne(num)
            add = false
            return obj
        }
        else if(h.isHit(obj.newNum) !== undefined && add === false) {
            obj.newNum = _subtractOne(obj.newNum)
            return obj
        }
        else if (h.isHit(obj.newNum) === undefined && add === false) {
            isVertical = true
            add = true
            return ifVertical(num)
        }
    }
    const reset = () => {
        isVertical = false
        add = true
    }
    const ifVertical = (num) => {
        obj.num = num
        return isVertical ? searchVertical(num) : searchHorizontal(num)
    }
    

    return {
        ifVertical,
        reset
    }
}

export {Gameboard, ifBoatIsHit, searchForBoat}