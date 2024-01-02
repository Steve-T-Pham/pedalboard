type FilterDropdownProps = {
    tags: string[];
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ tags }) => {
    return(
        <div className="container ml-5">
            
            {tags.map(tag => 
                <div key={tag} className="space-x-2">
                    <input type="checkbox"/>
                    <span>{tag}</span>
                </div>
            )}

        </div>
    );
}

export default FilterDropdown