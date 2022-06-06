"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateOrConnectWithoutNewsletter_subscribersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutNewsletter_subscribersInput_1 = require("../inputs/CustomersCreateWithoutNewsletter_subscribersInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateOrConnectWithoutNewsletter_subscribersInput = class CustomersCreateOrConnectWithoutNewsletter_subscribersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateOrConnectWithoutNewsletter_subscribersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutNewsletter_subscribersInput_1.CustomersCreateWithoutNewsletter_subscribersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutNewsletter_subscribersInput_1.CustomersCreateWithoutNewsletter_subscribersInput)
], CustomersCreateOrConnectWithoutNewsletter_subscribersInput.prototype, "create", void 0);
CustomersCreateOrConnectWithoutNewsletter_subscribersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateOrConnectWithoutNewsletter_subscribersInput", {
        isAbstract: true
    })
], CustomersCreateOrConnectWithoutNewsletter_subscribersInput);
exports.CustomersCreateOrConnectWithoutNewsletter_subscribersInput = CustomersCreateOrConnectWithoutNewsletter_subscribersInput;
