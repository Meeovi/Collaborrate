"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateOrConnectWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutCommentsInput_1 = require("../inputs/CustomersCreateWithoutCommentsInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateOrConnectWithoutCommentsInput = class CustomersCreateOrConnectWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateOrConnectWithoutCommentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCommentsInput_1.CustomersCreateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCommentsInput_1.CustomersCreateWithoutCommentsInput)
], CustomersCreateOrConnectWithoutCommentsInput.prototype, "create", void 0);
CustomersCreateOrConnectWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateOrConnectWithoutCommentsInput", {
        isAbstract: true
    })
], CustomersCreateOrConnectWithoutCommentsInput);
exports.CustomersCreateOrConnectWithoutCommentsInput = CustomersCreateOrConnectWithoutCommentsInput;
