type UserLevelType = {
    userLevel: 'Novice' | 'Advanced' | 'Competent' | 'Proficient' | 'Expert',
    skillName: string
}

export const Progressbar = ( { userLevel, skillName } : UserLevelType ) => {

    let progress = '';
    let color = '';

    switch(userLevel) {
        case 'Novice':
            progress = '20%';
            color = 'gray';
            break;
        
        case 'Advanced':
            progress = '40%'; 
            color = 'blue';
            break;

        case 'Competent':
            progress = '60%';
            color = 'green';
            break;

        case 'Proficient':
            progress = '80%';
            color = 'yellow';
            break;
            
        case 'Expert':
            progress = '100%';
            color = 'red';
            break;
    }

    return (
        <button className={'flex items-center m-1 p-3 cursor-pointer rounded-full hover:bg-gray-900 active:scale-95'}>
            <div className="w-[80px] bg-gray-700 rounded-full h-[4px] mr-[10px]">
                <div className={`h-[4px] rounded-full`} style={{backgroundColor: `${color}`, width: `${progress}`}}></div>
            </div>
            <span className={'text-gray-300'}>{skillName}</span>
        </button>
    )
}