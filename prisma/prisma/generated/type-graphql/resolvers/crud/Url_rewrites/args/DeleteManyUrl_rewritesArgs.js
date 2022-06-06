"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUrl_rewritesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesWhereInput_1 = require("../../../inputs/Url_rewritesWhereInput");
let DeleteManyUrl_rewritesArgs = class DeleteManyUrl_rewritesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesWhereInput_1.Url_rewritesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesWhereInput_1.Url_rewritesWhereInput)
], DeleteManyUrl_rewritesArgs.prototype, "where", void 0);
DeleteManyUrl_rewritesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyUrl_rewritesArgs);
exports.DeleteManyUrl_rewritesArgs = DeleteManyUrl_rewritesArgs;
