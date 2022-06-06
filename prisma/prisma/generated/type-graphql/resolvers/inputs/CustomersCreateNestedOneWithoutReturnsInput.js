"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateNestedOneWithoutReturnsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutReturnsInput_1 = require("../inputs/CustomersCreateOrConnectWithoutReturnsInput");
const CustomersCreateWithoutReturnsInput_1 = require("../inputs/CustomersCreateWithoutReturnsInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateNestedOneWithoutReturnsInput = class CustomersCreateNestedOneWithoutReturnsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutReturnsInput_1.CustomersCreateWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutReturnsInput_1.CustomersCreateWithoutReturnsInput)
], CustomersCreateNestedOneWithoutReturnsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutReturnsInput_1.CustomersCreateOrConnectWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutReturnsInput_1.CustomersCreateOrConnectWithoutReturnsInput)
], CustomersCreateNestedOneWithoutReturnsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateNestedOneWithoutReturnsInput.prototype, "connect", void 0);
CustomersCreateNestedOneWithoutReturnsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateNestedOneWithoutReturnsInput", {
        isAbstract: true
    })
], CustomersCreateNestedOneWithoutReturnsInput);
exports.CustomersCreateNestedOneWithoutReturnsInput = CustomersCreateNestedOneWithoutReturnsInput;
