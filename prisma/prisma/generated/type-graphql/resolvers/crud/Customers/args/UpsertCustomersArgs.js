"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateInput_1 = require("../../../inputs/CustomersCreateInput");
const CustomersUpdateInput_1 = require("../../../inputs/CustomersUpdateInput");
const CustomersWhereUniqueInput_1 = require("../../../inputs/CustomersWhereUniqueInput");
let UpsertCustomersArgs = class UpsertCustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], UpsertCustomersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateInput_1.CustomersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateInput_1.CustomersCreateInput)
], UpsertCustomersArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateInput_1.CustomersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersUpdateInput_1.CustomersUpdateInput)
], UpsertCustomersArgs.prototype, "update", void 0);
UpsertCustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertCustomersArgs);
exports.UpsertCustomersArgs = UpsertCustomersArgs;
