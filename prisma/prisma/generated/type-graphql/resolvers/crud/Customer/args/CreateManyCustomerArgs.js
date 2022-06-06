"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCustomerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerCreateManyInput_1 = require("../../../inputs/CustomerCreateManyInput");
let CreateManyCustomerArgs = class CreateManyCustomerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerCreateManyInput_1.CustomerCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCustomerArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCustomerArgs.prototype, "skipDuplicates", void 0);
CreateManyCustomerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCustomerArgs);
exports.CreateManyCustomerArgs = CreateManyCustomerArgs;
