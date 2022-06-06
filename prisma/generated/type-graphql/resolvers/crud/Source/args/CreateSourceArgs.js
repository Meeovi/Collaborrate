"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSourceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SourceCreateInput_1 = require("../../../inputs/SourceCreateInput");
let CreateSourceArgs = class CreateSourceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceCreateInput_1.SourceCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SourceCreateInput_1.SourceCreateInput)
], CreateSourceArgs.prototype, "data", void 0);
CreateSourceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateSourceArgs);
exports.CreateSourceArgs = CreateSourceArgs;
