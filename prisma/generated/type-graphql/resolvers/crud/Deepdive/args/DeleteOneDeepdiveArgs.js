"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneDeepdiveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeepdiveWhereUniqueInput_1 = require("../../../inputs/DeepdiveWhereUniqueInput");
let DeleteOneDeepdiveArgs = class DeleteOneDeepdiveArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveWhereUniqueInput_1.DeepdiveWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DeepdiveWhereUniqueInput_1.DeepdiveWhereUniqueInput)
], DeleteOneDeepdiveArgs.prototype, "where", void 0);
DeleteOneDeepdiveArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneDeepdiveArgs);
exports.DeleteOneDeepdiveArgs = DeleteOneDeepdiveArgs;
