"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersCreateOrConnectWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersCreateWithoutCustomersInput_1 = require("../inputs/Newsletter_subscribersCreateWithoutCustomersInput");
const Newsletter_subscribersWhereUniqueInput_1 = require("../inputs/Newsletter_subscribersWhereUniqueInput");
let Newsletter_subscribersCreateOrConnectWithoutCustomersInput = class Newsletter_subscribersCreateOrConnectWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereUniqueInput_1.Newsletter_subscribersWhereUniqueInput)
], Newsletter_subscribersCreateOrConnectWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersCreateWithoutCustomersInput_1.Newsletter_subscribersCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersCreateWithoutCustomersInput_1.Newsletter_subscribersCreateWithoutCustomersInput)
], Newsletter_subscribersCreateOrConnectWithoutCustomersInput.prototype, "create", void 0);
Newsletter_subscribersCreateOrConnectWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersCreateOrConnectWithoutCustomersInput", {
        isAbstract: true
    })
], Newsletter_subscribersCreateOrConnectWithoutCustomersInput);
exports.Newsletter_subscribersCreateOrConnectWithoutCustomersInput = Newsletter_subscribersCreateOrConnectWithoutCustomersInput;
