import React, { Component } from "react";

export const color = {
  EMPTY: "#d3d3d3", //light grey
  FARM: "#228B22", //green
  WALL: "#282828", //grey
  ENEMY_ARMY: "#8b0000", //red
  FRIENDLY_ARMY: "#000080", //blue
  OUT_OF_BOUNDS: "#000000", //black
  UNLOADED: "#FF00FF", //magneta
  SELECTED: "#FFFFFF80" //white highlight
}

export class TileInfo extends Component {

    constructor(x, y){
        super()
        this.x = x
        this.y = y

        this.isEmpty = true

        this.isFarm = false
        this.isWall = false
        this.isTile = false
        this.value = 0
        this.owner = null

        this.containsArmy = false
        this.armyOwner = null
        this.armyValue = 0

    }

    tileColor() {
      if(this.isFarm){
        return color.FARM
      }else if(this.isWall){
        return color.WALL
      }else if(this.isTile){
        return color.EMPTY
      }else{
        return color.OUT_OF_BOUNDS
      }
    }

    armyColor(){
      if(this.containsArmy){
        return color.FRIENDLY_ARMY
      }
    }

    tileType() {
      if(this.isFarm){
        return "farm"
      }else if(this.isWall){
        return "wall"
      }else if(this.isTile){
        return "empty"
      }else{
        return "not a tile"
      }
    }

    render() {
        return (
          <div>
              <p>Tile Coords: ({this.state.coordinate.x},{this.state.coordinate.y})</p>
              <p>Tile Type: {this.tileType()}</p>
          </div>
        );
    }

}