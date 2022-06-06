"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateOrConnectWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutOrdersInput_1 = require("../inputs/CustomersCreateWithoutOrdersInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateOrConnectWithoutOrdersInput = class CustomersCreateOrConnectWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateOrConnectWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutOrdersInput_1.CustomersCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutOrdersInput_1.CustomersCreateWithoutOrdersInput)
], CustomersCreateOrConnectWithoutOrdersInput.prototype, "create", void 0);
CustomersCreateOrConnectWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateOrConnectWithoutOrdersInput", {
        isAbstract: true
    })
], CustomersCreateOrConnectWithoutOrdersInput);
exports.CustomersCreateOrConnectWithoutOrdersInput = CustomersCreateOrConnectWithoutOrdersInput;
