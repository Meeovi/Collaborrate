"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateNestedOneWithoutNewsletter_subscribersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutNewsletter_subscribersInput_1 = require("../inputs/CustomersCreateOrConnectWithoutNewsletter_subscribersInput");
const CustomersCreateWithoutNewsletter_subscribersInput_1 = require("../inputs/CustomersCreateWithoutNewsletter_subscribersInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateNestedOneWithoutNewsletter_subscribersInput = class CustomersCreateNestedOneWithoutNewsletter_subscribersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutNewsletter_subscribersInput_1.CustomersCreateWithoutNewsletter_subscribersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutNewsletter_subscribersInput_1.CustomersCreateWithoutNewsletter_subscribersInput)
], CustomersCreateNestedOneWithoutNewsletter_subscribersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutNewsletter_subscribersInput_1.CustomersCreateOrConnectWithoutNewsletter_subscribersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutNewsletter_subscribersInput_1.CustomersCreateOrConnectWithoutNewsletter_subscribersInput)
], CustomersCreateNestedOneWithoutNewsletter_subscribersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateNestedOneWithoutNewsletter_subscribersInput.prototype, "connect", void 0);
CustomersCreateNestedOneWithoutNewsletter_subscribersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateNestedOneWithoutNewsletter_subscribersInput", {
        isAbstract: true
    })
], CustomersCreateNestedOneWithoutNewsletter_subscribersInput);
exports.CustomersCreateNestedOneWithoutNewsletter_subscribersInput = CustomersCreateNestedOneWithoutNewsletter_subscribersInput;
