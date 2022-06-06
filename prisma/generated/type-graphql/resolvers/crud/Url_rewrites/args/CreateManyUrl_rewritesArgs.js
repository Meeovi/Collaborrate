"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUrl_rewritesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesCreateManyInput_1 = require("../../../inputs/Url_rewritesCreateManyInput");
let CreateManyUrl_rewritesArgs = class CreateManyUrl_rewritesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Url_rewritesCreateManyInput_1.Url_rewritesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyUrl_rewritesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyUrl_rewritesArgs.prototype, "skipDuplicates", void 0);
CreateManyUrl_rewritesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyUrl_rewritesArgs);
exports.CreateManyUrl_rewritesArgs = CreateManyUrl_rewritesArgs;
