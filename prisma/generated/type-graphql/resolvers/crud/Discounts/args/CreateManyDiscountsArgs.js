"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDiscountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DiscountsCreateManyInput_1 = require("../../../inputs/DiscountsCreateManyInput");
let CreateManyDiscountsArgs = class CreateManyDiscountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DiscountsCreateManyInput_1.DiscountsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyDiscountsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyDiscountsArgs.prototype, "skipDuplicates", void 0);
CreateManyDiscountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyDiscountsArgs);
exports.CreateManyDiscountsArgs = CreateManyDiscountsArgs;
