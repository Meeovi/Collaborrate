"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateNestedOneWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutCommentsInput_1 = require("../inputs/CustomersCreateOrConnectWithoutCommentsInput");
const CustomersCreateWithoutCommentsInput_1 = require("../inputs/CustomersCreateWithoutCommentsInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateNestedOneWithoutCommentsInput = class CustomersCreateNestedOneWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCommentsInput_1.CustomersCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCommentsInput_1.CustomersCreateWithoutCommentsInput)
], CustomersCreateNestedOneWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCommentsInput_1.CustomersCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutCommentsInput_1.CustomersCreateOrConnectWithoutCommentsInput)
], CustomersCreateNestedOneWithoutCommentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateNestedOneWithoutCommentsInput.prototype, "connect", void 0);
CustomersCreateNestedOneWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateNestedOneWithoutCommentsInput", {
        isAbstract: true
    })
], CustomersCreateNestedOneWithoutCommentsInput);
exports.CustomersCreateNestedOneWithoutCommentsInput = CustomersCreateNestedOneWithoutCommentsInput;
