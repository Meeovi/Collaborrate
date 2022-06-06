"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSegmentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateSegmentsArgs_1 = require("./args/CreateSegmentsArgs");
const Segments_1 = require("../../../models/Segments");
const helpers_1 = require("../../../helpers");
let CreateSegmentsResolver = class CreateSegmentsResolver {
    async createSegments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).segments.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Segments_1.Segments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateSegmentsArgs_1.CreateSegmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateSegmentsResolver.prototype, "createSegments", null);
CreateSegmentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Segments_1.Segments)
], CreateSegmentsResolver);
exports.CreateSegmentsResolver = CreateSegmentsResolver;
