"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUrl_rewritesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesUpdateInput_1 = require("../../../inputs/Url_rewritesUpdateInput");
const Url_rewritesWhereUniqueInput_1 = require("../../../inputs/Url_rewritesWhereUniqueInput");
let UpdateUrl_rewritesArgs = class UpdateUrl_rewritesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesUpdateInput_1.Url_rewritesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Url_rewritesUpdateInput_1.Url_rewritesUpdateInput)
], UpdateUrl_rewritesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesWhereUniqueInput_1.Url_rewritesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Url_rewritesWhereUniqueInput_1.Url_rewritesWhereUniqueInput)
], UpdateUrl_rewritesArgs.prototype, "where", void 0);
UpdateUrl_rewritesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateUrl_rewritesArgs);
exports.UpdateUrl_rewritesArgs = UpdateUrl_rewritesArgs;
