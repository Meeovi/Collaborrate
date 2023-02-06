"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersUpdateInput_1 = require("../../../inputs/CustomersUpdateInput");
const CustomersWhereUniqueInput_1 = require("../../../inputs/CustomersWhereUniqueInput");
let UpdateOneCustomersArgs = class UpdateOneCustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateInput_1.CustomersUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersUpdateInput_1.CustomersUpdateInput)
], UpdateOneCustomersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], UpdateOneCustomersArgs.prototype, "where", void 0);
UpdateOneCustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCustomersArgs);
exports.UpdateOneCustomersArgs = UpdateOneCustomersArgs;
