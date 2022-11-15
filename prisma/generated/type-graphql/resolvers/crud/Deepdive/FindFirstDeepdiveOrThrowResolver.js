"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDeepdiveOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstDeepdiveOrThrowArgs_1 = require("./args/FindFirstDeepdiveOrThrowArgs");
const Deepdive_1 = require("../../../models/Deepdive");
const helpers_1 = require("../../../helpers");
let FindFirstDeepdiveOrThrowResolver = class FindFirstDeepdiveOrThrowResolver {
    async findFirstDeepdiveOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Deepdive_1.Deepdive, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDeepdiveOrThrowArgs_1.FindFirstDeepdiveOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstDeepdiveOrThrowResolver.prototype, "findFirstDeepdiveOrThrow", null);
FindFirstDeepdiveOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Deepdive_1.Deepdive)
], FindFirstDeepdiveOrThrowResolver);
exports.FindFirstDeepdiveOrThrowResolver = FindFirstDeepdiveOrThrowResolver;
