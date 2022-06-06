"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUrl_rewritesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesCreateInput_1 = require("../../../inputs/Url_rewritesCreateInput");
let CreateUrl_rewritesArgs = class CreateUrl_rewritesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesCreateInput_1.Url_rewritesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Url_rewritesCreateInput_1.Url_rewritesCreateInput)
], CreateUrl_rewritesArgs.prototype, "data", void 0);
CreateUrl_rewritesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateUrl_rewritesArgs);
exports.CreateUrl_rewritesArgs = CreateUrl_rewritesArgs;
