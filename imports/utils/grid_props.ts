interface ResponsiveGridProps {
    smallDevices: GridProps;
    mediumDevices: GridProps;
    largeDevices: GridProps;
}

interface GridProps {
    itemsPerRow: number;
    spaceBetween: string;
}
