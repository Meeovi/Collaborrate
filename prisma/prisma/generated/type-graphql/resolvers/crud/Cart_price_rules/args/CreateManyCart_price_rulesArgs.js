"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCart_price_rulesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cart_price_rulesCreateManyInput_1 = require("../../../inputs/Cart_price_rulesCreateManyInput");
let CreateManyCart_price_rulesArgs = class CreateManyCart_price_rulesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Cart_price_rulesCreateManyInput_1.Cart_price_rulesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCart_price_rulesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCart_price_rulesArgs.prototype, "skipDuplicates", void 0);
CreateManyCart_price_rulesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCart_price_rulesArgs);
exports.CreateManyCart_price_rulesArgs = CreateManyCart_price_rulesArgs;
