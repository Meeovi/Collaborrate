"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUrl_rewritesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesUpdateManyMutationInput_1 = require("../../../inputs/Url_rewritesUpdateManyMutationInput");
const Url_rewritesWhereInput_1 = require("../../../inputs/Url_rewritesWhereInput");
let UpdateManyUrl_rewritesArgs = class UpdateManyUrl_rewritesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesUpdateManyMutationInput_1.Url_rewritesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Url_rewritesUpdateManyMutationInput_1.Url_rewritesUpdateManyMutationInput)
], UpdateManyUrl_rewritesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesWhereInput_1.Url_rewritesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesWhereInput_1.Url_rewritesWhereInput)
], UpdateManyUrl_rewritesArgs.prototype, "where", void 0);
UpdateManyUrl_rewritesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyUrl_rewritesArgs);
exports.UpdateManyUrl_rewritesArgs = UpdateManyUrl_rewritesArgs;
