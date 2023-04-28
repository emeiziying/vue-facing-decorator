import { obtainSlot } from '../utils'

type Creator = { (options: any, key: string): void }

export interface Record {
    key: string
    creator: Creator
    preserve: boolean
}

export const CustomRecords: Record[] = []

export function createDecorator(creator: Creator, opt?: {
    preserve?: boolean
}) {

    return function (proto: any, key: string) {
        const slot = obtainSlot(proto)
        const map = slot.obtainMap('customDecorator')
        map.set(key, {
            key,
            creator,
            preserve: !!opt?.preserve
        })
    }
}


