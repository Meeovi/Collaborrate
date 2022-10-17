"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDeepdiveResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneDeepdiveArgs_1 = require("./args/UpdateOneDeepdiveArgs");
const Deepdive_1 = require("../../../models/Deepdive");
const helpers_1 = require("../../../helpers");
let UpdateOneDeepdiveResolver = class UpdateOneDeepdiveResolver {
    async updateOneDeepdive(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Deepdive_1.Deepdive, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDeepdiveArgs_1.UpdateOneDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneDeepdiveResolver.prototype, "updateOneDeepdive", null);
UpdateOneDeepdiveResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Deepdive_1.Deepdive)
], UpdateOneDeepdiveResolver);
exports.UpdateOneDeepdiveResolver = UpdateOneDeepdiveResolver;
