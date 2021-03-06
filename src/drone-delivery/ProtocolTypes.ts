import NeedParams from './NeedParams';
import BidParams from './BidParams';
import MissionParams from './MissionParams';
import MessageParams from './MessageParams';
import NeedFilterParams from './NeedFilterParams';

export default {
    need_filter: NeedFilterParams,
    need: NeedParams,
    bid: BidParams,
    mission: MissionParams,
    message: MessageParams,
    needFilters: [
        'need_filter',
    ],
    needs: [
        'need',
    ],
    bids: [
        'bid',
    ],
    missions: [
        'mission',
    ],
    messages: [
        'message',
    ],
};
