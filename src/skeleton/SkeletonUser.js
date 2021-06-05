import SkeletonElement from './SkeletonElement';

const SkeletonUser = () => {

    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-article">
                <SkeletonElement type="avatar" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
            </div>
        </div>
    );
};

export default SkeletonUser;