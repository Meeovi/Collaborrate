"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCouponsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsCreateManyInput_1 = require("../../../inputs/CouponsCreateManyInput");
let CreateManyCouponsArgs = class CreateManyCouponsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsCreateManyInput_1.CouponsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCouponsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCouponsArgs.prototype, "skipDuplicates", void 0);
CreateManyCouponsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCouponsArgs);
exports.CreateManyCouponsArgs = CreateManyCouponsArgs;
