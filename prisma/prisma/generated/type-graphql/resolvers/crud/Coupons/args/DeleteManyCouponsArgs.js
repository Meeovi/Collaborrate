"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCouponsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsWhereInput_1 = require("../../../inputs/CouponsWhereInput");
let DeleteManyCouponsArgs = class DeleteManyCouponsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereInput_1.CouponsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsWhereInput_1.CouponsWhereInput)
], DeleteManyCouponsArgs.prototype, "where", void 0);
DeleteManyCouponsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCouponsArgs);
exports.DeleteManyCouponsArgs = DeleteManyCouponsArgs;
