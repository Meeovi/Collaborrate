"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateNestedOneWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutOrdersInput_1 = require("../inputs/CustomersCreateOrConnectWithoutOrdersInput");
const CustomersCreateWithoutOrdersInput_1 = require("../inputs/CustomersCreateWithoutOrdersInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateNestedOneWithoutOrdersInput = class CustomersCreateNestedOneWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutOrdersInput_1.CustomersCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutOrdersInput_1.CustomersCreateWithoutOrdersInput)
], CustomersCreateNestedOneWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutOrdersInput_1.CustomersCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutOrdersInput_1.CustomersCreateOrConnectWithoutOrdersInput)
], CustomersCreateNestedOneWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateNestedOneWithoutOrdersInput.prototype, "connect", void 0);
CustomersCreateNestedOneWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateNestedOneWithoutOrdersInput", {
        isAbstract: true
    })
], CustomersCreateNestedOneWithoutOrdersInput);
exports.CustomersCreateNestedOneWithoutOrdersInput = CustomersCreateNestedOneWithoutOrdersInput;
