"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertUrl_rewritesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesCreateInput_1 = require("../../../inputs/Url_rewritesCreateInput");
const Url_rewritesUpdateInput_1 = require("../../../inputs/Url_rewritesUpdateInput");
const Url_rewritesWhereUniqueInput_1 = require("../../../inputs/Url_rewritesWhereUniqueInput");
let UpsertUrl_rewritesArgs = class UpsertUrl_rewritesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesWhereUniqueInput_1.Url_rewritesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Url_rewritesWhereUniqueInput_1.Url_rewritesWhereUniqueInput)
], UpsertUrl_rewritesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesCreateInput_1.Url_rewritesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Url_rewritesCreateInput_1.Url_rewritesCreateInput)
], UpsertUrl_rewritesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesUpdateInput_1.Url_rewritesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Url_rewritesUpdateInput_1.Url_rewritesUpdateInput)
], UpsertUrl_rewritesArgs.prototype, "update", void 0);
UpsertUrl_rewritesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertUrl_rewritesArgs);
exports.UpsertUrl_rewritesArgs = UpsertUrl_rewritesArgs;
