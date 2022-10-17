"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesCreateInput_1 = require("../../../inputs/PagesCreateInput");
let CreateOnePagesArgs = class CreateOnePagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesCreateInput_1.PagesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesCreateInput_1.PagesCreateInput)
], CreateOnePagesArgs.prototype, "data", void 0);
CreateOnePagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOnePagesArgs);
exports.CreateOnePagesArgs = CreateOnePagesArgs;
