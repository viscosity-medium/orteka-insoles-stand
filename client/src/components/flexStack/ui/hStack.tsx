import {Flex, FlexProps} from "@/components/flexStack/ui/flex";

type HStackProps = Omit<FlexProps, 'direction'>

const HStack = (props: HStackProps) => (

    <Flex
        direction="row"
        {...props}
    />

);

export { HStack };
