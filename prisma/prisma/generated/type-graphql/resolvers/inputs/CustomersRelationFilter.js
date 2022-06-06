"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersWhereInput_1 = require("../inputs/CustomersWhereInput");
let CustomersRelationFilter = class CustomersRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereInput_1.CustomersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereInput_1.CustomersWhereInput)
], CustomersRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereInput_1.CustomersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereInput_1.CustomersWhereInput)
], CustomersRelationFilter.prototype, "isNot", void 0);
CustomersRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersRelationFilter", {
        isAbstract: true
    })
], CustomersRelationFilter);
exports.CustomersRelationFilter = CustomersRelationFilter;
