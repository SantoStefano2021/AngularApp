export class WaterfoolDeviceStructure{
    status: any;
    message: StructuralDevice[] = [];
}

export class StructuralDevice{
    node_chipid: string = '';
    description: string = '';
    unit: string = '';
}