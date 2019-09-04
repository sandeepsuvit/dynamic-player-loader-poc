import { PlayerTypesEnum } from '../../enums/player-types.enum';

/**
 * Abstract interface for the player
 *
 * @export
 * @interface IPlayer
 */
export interface IPlayer {
    type: PlayerTypesEnum;
    data: any;
}
