"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersOrderByWithRelationInput_1 = require("../../../inputs/CustomersOrderByWithRelationInput");
const CustomersWhereInput_1 = require("../../../inputs/CustomersWhereInput");
const CustomersWhereUniqueInput_1 = require("../../../inputs/CustomersWhereUniqueInput");
let AggregateCustomersArgs = class AggregateCustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereInput_1.CustomersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereInput_1.CustomersWhereInput)
], AggregateCustomersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomersOrderByWithRelationInput_1.CustomersOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCustomersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], AggregateCustomersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCustomersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCustomersArgs.prototype, "skip", void 0);
AggregateCustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCustomersArgs);
exports.AggregateCustomersArgs = AggregateCustomersArgs;
