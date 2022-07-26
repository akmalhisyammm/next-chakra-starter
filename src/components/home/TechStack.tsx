import { HStack, Icon, Tooltip } from '@chakra-ui/react';
import { SiChakraui, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';

const SampleIcons = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="show">
      <HStack justifyContent="center" spacing={5} marginY={8}>
        <motion.div
          variants={{
            hidden: { y: 50, opacity: 0 },
            show: { y: 0, opacity: 1, transition: { ease: 'easeOut' } },
          }}>
          <Tooltip label="Next.js" closeOnClick={false}>
            <span>
              <Icon as={SiNextdotjs} fontSize={42} />
            </span>
          </Tooltip>
        </motion.div>

        <motion.div
          variants={{
            hidden: { y: 50, opacity: 0 },
            show: { y: 0, opacity: 1, transition: { ease: 'easeOut' } },
          }}>
          <Tooltip label="Chakra UI" closeOnClick={false}>
            <span>
              <Icon as={SiChakraui} fontSize={42} />
            </span>
          </Tooltip>
        </motion.div>

        <motion.div
          variants={{
            hidden: { y: 50, opacity: 0 },
            show: { y: 0, opacity: 1, transition: { ease: 'easeOut' } },
          }}>
          <Tooltip label="TypeScript" closeOnClick={false}>
            <span>
              <Icon as={SiTypescript} fontSize={42} />
            </span>
          </Tooltip>
        </motion.div>
      </HStack>
    </motion.div>
  );
};

export default SampleIcons;
