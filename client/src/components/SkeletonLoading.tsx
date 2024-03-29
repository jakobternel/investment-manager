import "../styles/components/_skeleton.scss";
import { SkeletonLoadingProps } from "../types/skeletonLoadingProps";

function SkeletonLoading({
    skeletonStyle,
    tableColumns,
    tableRows,
}: SkeletonLoadingProps): JSX.Element {
    function generateTableRows(): JSX.Element {
        if (tableRows !== undefined && tableColumns !== undefined) {
            const tableRowElements: JSX.Element[] = [];

            for (let i = 0; i < tableRows; i++) {
                const tableCellElements: JSX.Element[] = [];

                for (let j = 0; j < tableColumns; j++) {
                    tableCellElements.push(
                        <td key={`skeleton-loading-table-cell-${j}`}>
                            <div className='loading-element'></div>
                        </td>,
                    );
                }

                tableRowElements.push(
                    <tr className='skeleton-loading' key={`skeleton-loading-table-row-${i}`}>
                        {tableCellElements}
                    </tr>,
                );
            }

            return <>{tableRowElements}</>;
        } else {
            return <></>;
        }
    }

    return skeletonStyle === "table-rows" ? (
        generateTableRows()
    ) : (
        <div className='skeleton-loading'>
            <div className='loading-element loading-element-border'></div>
        </div>
    );
}

export default SkeletonLoading;
