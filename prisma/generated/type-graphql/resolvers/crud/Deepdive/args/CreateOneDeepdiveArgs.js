"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneDeepdiveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeepdiveCreateInput_1 = require("../../../inputs/DeepdiveCreateInput");
let CreateOneDeepdiveArgs = class CreateOneDeepdiveArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveCreateInput_1.DeepdiveCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DeepdiveCreateInput_1.DeepdiveCreateInput)
], CreateOneDeepdiveArgs.prototype, "data", void 0);
CreateOneDeepdiveArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneDeepdiveArgs);
exports.CreateOneDeepdiveArgs = CreateOneDeepdiveArgs;
