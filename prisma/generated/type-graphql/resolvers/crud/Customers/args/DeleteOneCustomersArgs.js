"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersWhereUniqueInput_1 = require("../../../inputs/CustomersWhereUniqueInput");
let DeleteOneCustomersArgs = class DeleteOneCustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], DeleteOneCustomersArgs.prototype, "where", void 0);
DeleteOneCustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCustomersArgs);
exports.DeleteOneCustomersArgs = DeleteOneCustomersArgs;
