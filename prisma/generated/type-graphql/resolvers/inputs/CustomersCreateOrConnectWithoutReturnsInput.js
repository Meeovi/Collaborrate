"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateOrConnectWithoutReturnsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutReturnsInput_1 = require("../inputs/CustomersCreateWithoutReturnsInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateOrConnectWithoutReturnsInput = class CustomersCreateOrConnectWithoutReturnsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateOrConnectWithoutReturnsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutReturnsInput_1.CustomersCreateWithoutReturnsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutReturnsInput_1.CustomersCreateWithoutReturnsInput)
], CustomersCreateOrConnectWithoutReturnsInput.prototype, "create", void 0);
CustomersCreateOrConnectWithoutReturnsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateOrConnectWithoutReturnsInput", {
        isAbstract: true
    })
], CustomersCreateOrConnectWithoutReturnsInput);
exports.CustomersCreateOrConnectWithoutReturnsInput = CustomersCreateOrConnectWithoutReturnsInput;
