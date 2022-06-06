"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpsertWithoutNewsletter_subscribersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutNewsletter_subscribersInput_1 = require("../inputs/CustomersCreateWithoutNewsletter_subscribersInput");
const CustomersUpdateWithoutNewsletter_subscribersInput_1 = require("../inputs/CustomersUpdateWithoutNewsletter_subscribersInput");
let CustomersUpsertWithoutNewsletter_subscribersInput = class CustomersUpsertWithoutNewsletter_subscribersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutNewsletter_subscribersInput_1.CustomersUpdateWithoutNewsletter_subscribersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutNewsletter_subscribersInput_1.CustomersUpdateWithoutNewsletter_subscribersInput)
], CustomersUpsertWithoutNewsletter_subscribersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutNewsletter_subscribersInput_1.CustomersCreateWithoutNewsletter_subscribersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutNewsletter_subscribersInput_1.CustomersCreateWithoutNewsletter_subscribersInput)
], CustomersUpsertWithoutNewsletter_subscribersInput.prototype, "create", void 0);
CustomersUpsertWithoutNewsletter_subscribersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpsertWithoutNewsletter_subscribersInput", {
        isAbstract: true
    })
], CustomersUpsertWithoutNewsletter_subscribersInput);
exports.CustomersUpsertWithoutNewsletter_subscribersInput = CustomersUpsertWithoutNewsletter_subscribersInput;
