import { Icon, Tooltip } from '@chakra-ui/react';

import type { IconType } from 'react-icons';

type TechTooltipProps = {
  label: string;
  icon: IconType;
};

const TechTooltip = ({ label, icon }: TechTooltipProps) => {
  return (
    <Tooltip label={label} closeOnClick={false}>
      <span>
        <Icon as={icon} fontSize={42} />
      </span>
    </Tooltip>
  );
};

export default TechTooltip;
