"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupCreateManyCustomersInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupCreateManyCustomersInput_1 = require("../inputs/Customer_groupCreateManyCustomersInput");
let Customer_groupCreateManyCustomersInputEnvelope = class Customer_groupCreateManyCustomersInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupCreateManyCustomersInput_1.Customer_groupCreateManyCustomersInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupCreateManyCustomersInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Customer_groupCreateManyCustomersInputEnvelope.prototype, "skipDuplicates", void 0);
Customer_groupCreateManyCustomersInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupCreateManyCustomersInputEnvelope", {
        isAbstract: true
    })
], Customer_groupCreateManyCustomersInputEnvelope);
exports.Customer_groupCreateManyCustomersInputEnvelope = Customer_groupCreateManyCustomersInputEnvelope;
