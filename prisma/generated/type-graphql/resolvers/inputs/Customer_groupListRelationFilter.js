"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupWhereInput_1 = require("../inputs/Customer_groupWhereInput");
let Customer_groupListRelationFilter = class Customer_groupListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereInput_1.Customer_groupWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereInput_1.Customer_groupWhereInput)
], Customer_groupListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereInput_1.Customer_groupWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereInput_1.Customer_groupWhereInput)
], Customer_groupListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereInput_1.Customer_groupWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereInput_1.Customer_groupWhereInput)
], Customer_groupListRelationFilter.prototype, "none", void 0);
Customer_groupListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupListRelationFilter", {
        isAbstract: true
    })
], Customer_groupListRelationFilter);
exports.Customer_groupListRelationFilter = Customer_groupListRelationFilter;
