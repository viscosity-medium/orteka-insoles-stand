import {Flex, FlexProps} from "@/components/flexStack/ui/flex";

type VStackProps = Omit<FlexProps, 'direction'>
const VStack = (props: VStackProps) => {

    const { align = 'start' } = props;

    return (
        <Flex
            direction="column"
            align={align}
            {...props}
        />
    );
};

export { VStack };
