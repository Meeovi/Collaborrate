"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCustomer_groupArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupCreateManyInput_1 = require("../../../inputs/Customer_groupCreateManyInput");
let CreateManyCustomer_groupArgs = class CreateManyCustomer_groupArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupCreateManyInput_1.Customer_groupCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCustomer_groupArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCustomer_groupArgs.prototype, "skipDuplicates", void 0);
CreateManyCustomer_groupArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCustomer_groupArgs);
exports.CreateManyCustomer_groupArgs = CreateManyCustomer_groupArgs;
