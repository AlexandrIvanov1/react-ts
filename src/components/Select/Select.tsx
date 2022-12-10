import React, {useEffect, useState} from 'react';
import styles from './Select.module.css'

type SelectWithDivType = {
    value?: string
    onChange: (value: string) => void
    items: Array<ItemType>
}
type ItemType = {
    title: string
    value: string
}

export const Select = React.memo((props: SelectWithDivType) => {

    const [active, setActive] = useState(false)
    const [hoveredItem, setHoveredItem] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const selectedHoveredItem = props.items.find(i => i.value === hoveredItem)

    useEffect(() => {
        setHoveredItem(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: string) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItem) {
                    const followingElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (followingElement) {
                        setHoveredItem(followingElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setHoveredItem(hoveredItem)
            setActive(false)
        }
    }

    return (
        <>
            <div className={styles.select} tabIndex={0} onKeyDown={onKeyDown}>

                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>

                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => {
                            return (
                                <div
                                    onMouseEnter={() => setHoveredItem(i.value)}
                                    className={`${styles.item} ${selectedHoveredItem === i ? styles.active : ''}`}
                                    onClick={() => onItemClick(i.value)}
                                    key={i.value}
                                >
                                    {i.title}
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </>
    );
})