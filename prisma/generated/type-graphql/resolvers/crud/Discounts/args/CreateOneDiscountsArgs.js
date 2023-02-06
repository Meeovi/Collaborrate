"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneDiscountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DiscountsCreateInput_1 = require("../../../inputs/DiscountsCreateInput");
let CreateOneDiscountsArgs = class CreateOneDiscountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DiscountsCreateInput_1.DiscountsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DiscountsCreateInput_1.DiscountsCreateInput)
], CreateOneDiscountsArgs.prototype, "data", void 0);
CreateOneDiscountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneDiscountsArgs);
exports.CreateOneDiscountsArgs = CreateOneDiscountsArgs;
