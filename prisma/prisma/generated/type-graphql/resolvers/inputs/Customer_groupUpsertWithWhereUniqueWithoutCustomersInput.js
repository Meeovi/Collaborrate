"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupUpsertWithWhereUniqueWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupCreateWithoutCustomersInput_1 = require("../inputs/Customer_groupCreateWithoutCustomersInput");
const Customer_groupUpdateWithoutCustomersInput_1 = require("../inputs/Customer_groupUpdateWithoutCustomersInput");
const Customer_groupWhereUniqueInput_1 = require("../inputs/Customer_groupWhereUniqueInput");
let Customer_groupUpsertWithWhereUniqueWithoutCustomersInput = class Customer_groupUpsertWithWhereUniqueWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereUniqueInput_1.Customer_groupWhereUniqueInput)
], Customer_groupUpsertWithWhereUniqueWithoutCustomersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupUpdateWithoutCustomersInput_1.Customer_groupUpdateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupUpdateWithoutCustomersInput_1.Customer_groupUpdateWithoutCustomersInput)
], Customer_groupUpsertWithWhereUniqueWithoutCustomersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupCreateWithoutCustomersInput_1.Customer_groupCreateWithoutCustomersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_groupCreateWithoutCustomersInput_1.Customer_groupCreateWithoutCustomersInput)
], Customer_groupUpsertWithWhereUniqueWithoutCustomersInput.prototype, "create", void 0);
Customer_groupUpsertWithWhereUniqueWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupUpsertWithWhereUniqueWithoutCustomersInput", {
        isAbstract: true
    })
], Customer_groupUpsertWithWhereUniqueWithoutCustomersInput);
exports.Customer_groupUpsertWithWhereUniqueWithoutCustomersInput = Customer_groupUpsertWithWhereUniqueWithoutCustomersInput;
